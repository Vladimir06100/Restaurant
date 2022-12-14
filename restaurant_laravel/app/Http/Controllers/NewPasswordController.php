<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\View\View
     */
    public function create(Request $request)
    {
        return view('auth.reset-password', ['request' => $request]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {   
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', Rules\Password::defaults()],
        ]);

        // Here we will attempt to reset the restaurateurs's password. If it is successful we
        // will update the password on an actual restaurateurs model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'token'),
            function ($restaurateurs, $password) {
                // Update the user's password in the database
                $restaurateurs->password = Hash::make($password);
                $restaurateurs->save();
    
                // Trigger an event (e.g. send an email notification)
                event(new PasswordReset($restaurateurs));
            }
        );

        // If the password was successfully reset, we will redirect the restaurateurs back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        return  response()->json([
            'status' => $status == Password::RESET_LINK_SENT ? "OK" : "KO",
            'message' => __($status)]);
    }
}

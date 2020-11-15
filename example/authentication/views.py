from django.http import Http404
from django.shortcuts import render, redirect
from .forms import  CreateAccountForm
from django.http import HttpResponse 
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


# LOGIN VIEW
def Login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)        
        if user:
            login(request, user)
            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect('posts')         
        else:
            messages.error(request, 'Email & Password did not match ')
    return render (request, 'login.html')


# User Registration View
def register(request):
    if request.method == 'POST':
        form = CreateAccountForm(request.POST)
        if form.is_valid():
            form.save() 
            return redirect('login')   
    else:
        form = CreateAccountForm()
    return render (request, 'register.html', {'form':form})


def Logout(request):
        logout(request)
        return redirect('login') 
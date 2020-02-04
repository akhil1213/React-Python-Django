from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
# Create your views here.
def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = UserCreationForm()#if its a get request make sure the form is reset
    return render(request,'signup.html',{'form':form})
#if user is logged in already, you can't log in again so
#you use confirm login allowed django
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            #log in the user who is the user?
            user = form.get_user()
            # if user is not None:
            login(request,user)
            return redirect('/')
    else:
        form = AuthenticationForm()#this can somehow become react?
    return render(request, 'login.html', {'form':form})
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/')
    return render(request,'logout.html')
# Limiting access to logged-in users¶
# The raw way¶
# The raw way to limit access to pages is to check request.user.is_authenticated and either redirect to a login page:
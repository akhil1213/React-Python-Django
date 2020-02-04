from django.urls import path, include
from .api import RegisterAPI
#from knox import views as knox_views
from . import views
urlpatterns = [
    path('signup',views.signup_view, name="signup"),
    path('login',views.login_view,name="login"),
    path('logout',views.logout_view,name="logout"), 
    #path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view())
]
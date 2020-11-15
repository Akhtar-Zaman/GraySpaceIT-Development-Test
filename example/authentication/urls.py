from django.urls import path
from authentication.views import Login, register, Logout

urlpatterns = [
    path('', Login, name='login'),
    path('logout/', Logout, name= "signout"),
    path('register/', register),
]

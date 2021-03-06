from django.urls import path
from .views import CustomUser_API, RegisterApi
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('userapi/', CustomUser_API.as_view()),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register', RegisterApi.as_view()),
   
]
from rest_framework import  serializers
from rest_framework.permissions import IsAuthenticated
from django.db import models
from authentication.models import CustomUser
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id','email','password','first_name', 'last_name')
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def create(self, validated_data):
        user = CustomUser.objects.create_user(validated_data['email'],     password = validated_data['password']  ,first_name=validated_data['first_name'],  last_name=validated_data['last_name'])
        return user
# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'



from authentication.models import CustomUser
class CustomUser_Serializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser 
        # ('__all__')  for all fields
        # ['title']
        fields = ('__all__')
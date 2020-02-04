from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django import forms

#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    #to add extra fields we have to:

    class Meta:
        model = User
        fields = ('id', 'username','password','email')
        #extra arguments enabling password to be write only
        extra_kwargs = {'password':{'write_only': True}}
    #creating a user with validated data, make sure its the right type of data
    def create(self,validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        user.college_name = self.cleaned_data["college_name"]
        return user
# Login Serializer




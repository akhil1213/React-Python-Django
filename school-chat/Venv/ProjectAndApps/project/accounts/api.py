from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

# Register Api
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):#request is going to have all of the useername,email fields from the frontend
        #args and kwargs means it can take more arguments 
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,
             context=self.get_serializer_context()).data,#getting the data needed 
             "token":AuthToken.objects.create(user)#creates a token specific to the current user
        })

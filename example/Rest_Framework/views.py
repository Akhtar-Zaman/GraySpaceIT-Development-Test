from rest_framework import generics
from authentication.models import CustomUser
from .serializer import CustomUser_Serializer
from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from .serializer import RegisterSerializer, UserSerializer
from authentication.models import CustomUser



#Register API
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })


class CustomUser_API(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUser_Serializer

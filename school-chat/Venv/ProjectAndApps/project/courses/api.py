from courses.models import Course
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        return self.request.user.courses.add()
    # allows us to save the course owner when we create the course
    #so if i create two courses it will be akhil cs 343 akhil cs 490
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
    
    

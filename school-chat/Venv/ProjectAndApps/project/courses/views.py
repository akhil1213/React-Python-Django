from django.shortcuts import render
from courses.models import Course
from courses.serializers import CourseSerializer
from rest_framework import generics
class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
# Create your views here.

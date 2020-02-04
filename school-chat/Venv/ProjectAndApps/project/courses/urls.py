from django.urls import path
from . import views
urlpatterns = [
    path('api/courses/', views.CourseListCreate.as_view() )
]

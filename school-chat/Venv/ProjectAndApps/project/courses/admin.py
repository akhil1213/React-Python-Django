from django.contrib import admin

# Register your models here.
<<<<<<< HEAD
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    #pass#to make this a valid class in python
    #if you don't put list display it will just be Course Object, so you specify which attributes are displayed

    list_display = ['courseName','professorName','time','owner']
=======
>>>>>>> d0bb6d432c1f7b95aebdf20a262679a4fa039691

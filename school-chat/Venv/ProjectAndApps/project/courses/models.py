from django.db import models
<<<<<<< HEAD
from django.contrib.auth.models import User
=======
>>>>>>> d0bb6d432c1f7b95aebdf20a262679a4fa039691

# Create your models here.
class Course(models.Model):
    courseName = models.CharField(max_length=100)
    professorName = models.CharField(max_length=100)
<<<<<<< HEAD
    time = models.TimeField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
=======
    time = models.TimeField()
>>>>>>> d0bb6d432c1f7b95aebdf20a262679a4fa039691

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Course(models.Model):
    courseName = models.CharField(max_length=100)
    professorName = models.CharField(max_length=100)
    time = models.TimeField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
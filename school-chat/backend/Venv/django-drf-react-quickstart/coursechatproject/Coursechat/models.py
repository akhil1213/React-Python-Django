# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Coursechat(models.Model):
    professorName = models.CharField(max_length=100)
    className = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
# Create your models here.

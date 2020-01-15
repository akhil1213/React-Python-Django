# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from Coursechat.models import Coursechat
from Coursechat.serializers import CoursechatSerializer
from rest_framework import generics
class CoursechatListCreate(generics.ListCreateAPIView):
    queryset = Coursechat.objects.all()
    serializer_class = CoursechatSerializer

# Create your views here.

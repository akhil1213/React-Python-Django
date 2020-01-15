from django.urls import path
from . import views
urlpatterns = [
    path('api/coursechat/', views.CoursechatListCreate.as_view() ),
]

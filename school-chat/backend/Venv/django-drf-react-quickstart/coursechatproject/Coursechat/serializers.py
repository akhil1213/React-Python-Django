from rest_framework import serializers
from Coursechat.models import Coursechat
class CoursechatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coursechat
        fields = ('id', 'professorName', 'className')

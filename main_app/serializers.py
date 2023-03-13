from rest_framework import serializers
from .models import Profile, MoveMoney

class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = "__all__"
		read_only_fields = ['user', "username", "email", "money"]

class HistorySerializer(serializers.ModelSerializer):
	sender_user=serializers.SerializerMethodField("get_sender_user")
	receiver_user=serializers.SerializerMethodField("get_receiver_user")

	class Meta:
		model = MoveMoney
		fields = "__all__"

	def get_sender_user(self, obj):
		return obj.sender_user.username

	def get_receiver_user(self, obj):
		return obj.receiver_user.username
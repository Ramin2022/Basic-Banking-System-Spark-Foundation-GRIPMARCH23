from django.db import models
from django.contrib.auth.models import User
import uuid

class Profile(models.Model):
	"""
		This is the profile model
	"""
	user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
	username = models.CharField(max_length=200)
	email = models.EmailField(null=True, blank=True)
	money = models.IntegerField(default=0)

	def __str__(self):
		return self.username

class MoveMoney(models.Model):
	"""
		This is the history of Move money
	"""
	sender_user=models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="sender_user")
	receiver_user = models.ForeignKey(Profile, on_delete=models.CASCADE)
	money = models.IntegerField()

	def __str__(self):
		return f"from the {self.sender_user.username} {self.money} sended to the {self.receiver_user.username}"
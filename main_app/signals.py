from django.db.models.signals import post_save, post_delete
from .models import Profile, MoveMoney
from django.contrib.auth.models import User


def create_user(sender, created, instance, **kwargs):
	if created:
		user=instance
		Profile.objects.create(user=user, username=user.username, email=user.email)

post_save.connect(create_user, User)

def update_user(sender, created, instance, **kwargs):
	user=instance
	if created == False:
		get_profile = Profile.objects.filter(user=user).first()
		get_profile.username=user.username
		get_profile.email=user.email
		get_profile.save()

post_save.connect(update_user, User)
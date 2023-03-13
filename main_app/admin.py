from django.contrib import admin
from .models import *

class ProfileAdmin(admin.ModelAdmin):
	list_display = ["__str__", "money"]
	list_editable=["money"]

admin.site.register(Profile, ProfileAdmin)
admin.site.register(MoveMoney)
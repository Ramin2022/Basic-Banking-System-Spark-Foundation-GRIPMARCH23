from django.urls import path
from . import views

urlpatterns = [
	path("", views.ProfileListView.as_view(), name="profile_list_view"),
	path("money/", views.MoveMoneyListView.as_view(), name="history_of_money")
]
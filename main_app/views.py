from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework import views, status
from rest_framework.response import Response
from . import serializers
from .models import Profile, MoveMoney
from rest_framework import mixins
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

class ProfileListView(views.APIView):


	def get(self, request, format=None):
		get_profile = Profile.objects.all()
		serialize_data=serializers.ProfileSerializer(get_profile, many=True)
		return Response(serialize_data.data, status=status.HTTP_200_OK)

	@csrf_exempt
	def post(self, request, format=None):
		print(request.data)
		# Get Parameter
		get_selected_user_id=request.data.get("selected_user_id")

		get_transfer_to_user_id=request.data.get("transfer_user_id")
		get_money=request.data.get("money")
		print(get_selected_user_id)
		print(get_transfer_to_user_id)
		print(get_money)
		# Chcek The Parameter not blank
		if get_selected_user_id is None:
			return Response({"detail":"The selected_user_id is Blank"}, status=status.HTTP_403_FORBIDDEN)

		
		elif get_transfer_to_user_id is None:
			return Response({"detail":"The transfer_user_id is Blank"}, status=status.HTTP_403_FORBIDDEN)

		
		elif get_money is None:
			return Response({"detail":"The money is Blank"}, status=status.HTTP_403_FORBIDDEN)

		# Proccess Section
		get_selected_profile = Profile.objects.filter(id=int(get_selected_user_id)).first()

		if get_selected_profile is None:
			return Response({"detail":"Selected user id not found!"}, status=status.HTTP_403_FORBIDDEN)

		get_transfer_profile = Profile.objects.filter(id=int(get_transfer_to_user_id)).first()


		if get_transfer_profile is None:
			return Response({"detail":"Transfer user id not found!"}, status=status.HTTP_403_FORBIDDEN)

		if get_selected_profile.money < int(get_money):
			return Response({"detail" : f"This user don't have {get_money}"})
		# Minus the moneies
		get_selected_profile.money-=int(get_money)
		get_transfer_profile.money+=int(get_money)

		# And Save Them
		get_selected_profile.save()
		get_transfer_profile.save()

		# And create a history
		MoveMoney.objects.create(sender_user=get_selected_profile, receiver_user=get_transfer_profile, money=get_money)

		return Response({"detail" : "Done!"})

class MoveMoneyListView(ListAPIView):
	queryset = MoveMoney.objects.all()
	serializer_class = serializers.HistorySerializer
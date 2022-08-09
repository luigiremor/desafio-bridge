from rest_framework.views import APIView
from .logic import count_same_divisors
from django.http import JsonResponse

class DivisorsView(APIView):
    def post(self, request):
        data = request.data.get('number')

        return JsonResponse({'result': count_same_divisors(data)})
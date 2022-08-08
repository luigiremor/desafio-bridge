from .views import DivisorsView

from django.urls import path


urlpatterns = [
    path('calculus/', DivisorsView.as_view()),
]

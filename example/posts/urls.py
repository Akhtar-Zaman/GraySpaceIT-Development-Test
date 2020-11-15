from django.urls import path
from . import views

urlpatterns = [
    path('', views.posts, name='posts'),
    path('search/', views.SearchResultsView.as_view(), name='search_results'),
    path('<int:id>', views.post_details, name='FullArticle')
]

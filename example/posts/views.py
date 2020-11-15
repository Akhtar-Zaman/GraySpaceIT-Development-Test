from django.shortcuts import render
import requests
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, get_object_or_404,redirect
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView, ListView
from django.db.models import Q

# POSTS VIEW ENDPOINT
@login_required(login_url="/")
def posts(request):
    api_url = requests.get('https://jsonplaceholder.typicode.com/posts')
    api_json = api_url.json()
    page = request.GET.get('page', 1)

    paginator = Paginator(api_json, 5)
    try:
        Blog_Posts = paginator.page(page)
    except PageNotAnInteger:
        Blog_Posts = paginator.page(1)
    except EmptyPage:
        Blog_Posts = paginator.page(paginator.num_pages)
    return render (request, 'blog-listing.html', {'Blog_Posts':Blog_Posts})
   


 # POST DETAILS VIEW ENDPOINT
@login_required(login_url="/")
def post_details(request, id):
    api_url = requests.get(f'https://jsonplaceholder.typicode.com/posts/{id}')
    api_json = api_url.json()

    comments = requests.get(f'https://jsonplaceholder.typicode.com/posts/{id}/comments')
    to = comments.json()
    return render(request, 'blog-post.html', {'todos':api_json, 'to':to})


class SearchResultsView(ListView):
    pass

    # template_name = 'search.html'

    # def get_queryset(self): # new
    #     query = self.request.GET.get('q')
    #     response = requests.get('https://jsonplaceholder.typicode.com/posts')
    #     todos = response.json()        
    #     object_list = todos(
    #          Q(title__icontains=query) | Q(body__icontains=query)
    #      )
    #     return object_list
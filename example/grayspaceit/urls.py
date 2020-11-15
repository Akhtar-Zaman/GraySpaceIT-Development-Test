
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from posts.views import posts


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('posts/', include('posts.urls')),
    path('rest/', include('Rest_Framework.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

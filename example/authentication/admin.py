from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('first_name','last_name','email', 'is_staff', 'is_active',)
    list_filter = ('first_name','last_name','email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('first_name','last_name','email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active','is_superuser')}),
    )

    search_fields = ('email',)
    ordering = ('email',)
admin.site.register(CustomUser, CustomUserAdmin)
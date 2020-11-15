
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser
from django import forms


class CreateAccountForm(UserCreationForm):
    password1 = forms.CharField(
        label="Password",
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'id':"password", 'required data-validation-required-message':"Please enter your Password."}),
    )
    password2 = forms.CharField(
        label="Confirm password",
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'id':"confirm-password", 'required data-validation-required-message':"Please enter your Confirm Password."}),
    )
    class Meta:
        model = CustomUser
        fields = ('first_name','last_name', 'email')
        
        widgets = {
	    'first_name': forms.TextInput(attrs={'class': 'form-control', 'id':"first_name", 'required data-validation-required-message':"Please enter your first name."}),
	    'last_name': forms.TextInput(attrs={'class': 'form-control', 'id':"last_name", 'required data-validation-required-message':"Please enter your last name."}),
	    'email': forms.EmailInput(attrs={'class': 'form-control', 'id':"email", 'required data-validation-required-message':"Please enter your Email."}),
		}


    def clean_email(self):
        email = self.cleaned_data['email']
        qs = CustomUser.objects.filter(email=email)
        if qs.exists():
            raise forms.ValidationError('This Email already been used')
        return email


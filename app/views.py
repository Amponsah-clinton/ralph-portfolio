from django.shortcuts import render, redirect
from .forms import Contactform
from django.core.mail import send_mail
from django.conf import settings


def index(request):
    form = Contactform()
    if request.method == 'POST':
        form = Contactform(request.POST)
        if form.is_valid():
            form.save()
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            send_mail(
                f'New message from {name} ({email}) ',
                message,
                 settings.EMAIL_HOST_USER,
                ['amponsahc306@gmail.com'],
                fail_silently=False,
            )
            form = Contactform()
            return redirect('index')
    return render(request, 'home.html')
from django.forms import ModelForm
from .models import contact


class Contactform(ModelForm):
    class Meta:
        model = contact
        fields = ('name','email','subject','message')


        


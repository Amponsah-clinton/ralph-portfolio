from django.db import models

# Create your models here.


class contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField(max_length=3000)


    def __str__(self):
        return self.name + ' ' + self.email 
    



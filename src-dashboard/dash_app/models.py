from django.db import models
from django.urls import reverse
from django.utils import timezone

# Create your models here.
 
class AllClearImages(models.Model):
    name = models.CharField(max_length=30)
    date = models.DateTimeField(default=timezone.now)

    def get_absolute_url(self):
        return reverse('event_detail', kwargs={'pk': self.pk})

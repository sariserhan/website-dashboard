from django.shortcuts import render
from random import randint
from django.urls import reverse
from django.views.generic import TemplateView
from chartjs.views.lines import BaseLineChartView
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView, CreateView, DetailView, FormView
from django.http import HttpResponse
# Create your views here.

import json
import os.path

def index(request):
    labels = []
    values = []
    test_title = 'Cosmic 2 Daily Occultation Counts - Sunshine'
    with open(os.path.dirname(__file__) + '/../data/atmOccsJsonC2.json', encoding="utf-8") as test_data:
        data = json.load(test_data)
        for d in data:
            date = d['date']
            labels.append(date)
            values.append(d['atm_count'])
        context = {'test_title': test_title, 'labels': labels, 'values': values}
    return render(request, 'graph_test.html', context)

def client_test(request, color='blue'):
    test_title= 'Client side dashboard generation'
    context={'test_title': test_title, 'color': color}
    return render(request, 'client_test.html', context)

def multiple_sets(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'client_c3.html', context)

def day_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'leo-dev-ml1-CurrentClientDay.html', context)

def day_view_stage(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'leo-stage-ml1-CurrentClientDay.html', context)

def day_gallery_c2(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'C2lightGalleryExampleDay.html', context)

def multiple_sets3(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'client_c4.html', context)

def week_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'leo-dev-ml1-CurrentClientWeek.html', context)

def week_view_stage(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'leo-stage-ml1-CurrentClientWeek.html', context)

def week_view_kompsat(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'kompsat-leo-stage-week.html', context)

def day_view_kompsat(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'kompsat-leo-stage-day.html', context)

def week_view_paz(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'paz-leo-stage-week.html', context)

def day_view_paz(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'paz-leo-stage-day.html', context)

def geoopt_day_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'geoOptics-test-day.html', context)

def geoopt_week_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'geoOptics-test-week.html', context)

def spire_day_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'spireDay.html', context)

def spire_week_view(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'spireWeek.html', context)

def dynamic_gallery(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryDay.html', context) 

def lightGallery_weiss(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryWeiss.html', context) 

def lightGallery_maggie(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryMaggie.html', context)

def lightGallery_adam(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGallerySunshine.html', context)

def lightGallery_raldtc(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryRALDTC.html', context)

def lightGallery_jianGPS(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryJianGPS.html', context)

def lightGallery_rachelDownlinks(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryRachelDownlinks.html', context)

def lightGallery_timeSeries(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryTimeSeries.html', context)

def lightGallery_latency(request, filename='occsC4'):
    test_title = 'COSMIC 2 Counts'
    context = {'test_title': test_title, 'filename': filename}
    return render(request, 'dynamicLightGalleryLatency.html', context)


def bar_graph(request):
    labels = []
    values = []
    test_title = 'Bar Graph Test C-2 Occultations'
    with open(os.path.dirname(__file__) + '/../data/atmOccsJsonC2.json', encoding='utf-8') as bar_data:
        data = json.load(bar_data)
        for d in data:
            date = d['date']
            labels.append(date)
            values.append(d['atm_count'])
    context = {'test_title': test_title, 'labels': labels, 'values': values}
    return render(request, 'bar_graph.html', context)

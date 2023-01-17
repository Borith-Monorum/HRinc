from django.shortcuts import render, redirect
from . import models
from .serializers import jobListSerializer, jobFunctionSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from . import forms




# Create your views here.

# JobFunction
def jobFunctionTitle(request):
    jobFunction_Titles = models.JobFunction.objects.all()

    q = request.GET.get('q') if request.GET.get('q') != None else ''
    jobFunctions = models.JobFunction.objects.filter(job_title__icontains=q)

    context = { 'jobFunction_Titles' : jobFunction_Titles , 'jobFunctions' : jobFunctions }
    return render(request, 'jobsite/home.html', context)


def jobList(request):
    job_Lists = models.JobList.objects.all()
    jobFunction_Titles = models.JobFunction.objects.all()

    q = request.GET.get('q') if request.GET.get('q') != None else ''
    jobFunctions = models.JobFunction.objects.filter(
        Q(job_title__icontains = q))

    context = { 'job_Lists' : job_Lists , 'jobFunction_Titles' : jobFunction_Titles , 'jobFunctions' : jobFunctions}
    return render(request, 'jobsite/jobList.html', context)


class JobFunctionViewSet(viewsets.ModelViewSet):
    queryset = models.JobFunction.objects.all()
    serializer_class = jobFunctionSerializer


class JobListViewSet(viewsets.ModelViewSet):
    queryset = models.JobList.objects.all()
    serializer_class = jobListSerializer


@api_view(['GET'])
def jobList_Detail(request, pk):
    job_Lists = models.JobList.objects.get(id=pk)
    serializer = jobListSerializer(job_Lists, many=False)

    return Response(serializer.data)


@api_view(['PUT'])
def jobList_Update(request, pk):
    job_Lists = models.JobList.objects.get(id=pk)
    serializer = jobListSerializer(instance=job_Lists, data=request.data)

    return Response(serializer.data)



def jobListForm(request):
    form = forms.jobListForm()

    if request.method == 'POST':
        form = forms.jobListForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('inputForm-api')

    context = { 'form' : form }
    return render(request, 'jobsite/jobListForm.html', context)




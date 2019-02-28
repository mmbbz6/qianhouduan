# -*- coding: utf-8 -*-
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core import serializers
import requests
import json

from models import Aliyun

# Create your views here.
@require_http_methods(["GET"])
def add_book(request):
    response = {}
    try:
        book = Book(shiliguige=request.GET.get('shiliguige'))
        book.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def show_aliyuns(request):
    response = {}
    try:
        aliyuns = Aliyun.objects.filter()
        response['list']  = json.loads(serializers.serialize("json", aliyuns))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

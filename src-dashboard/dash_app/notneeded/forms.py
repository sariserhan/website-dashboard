from django import forms

class CreateNew(forms.Form):
   username = forms.CharField(label="Please enter name: ", max_length = 100)


class LoginForm(forms.Form):
   username = forms.CharField(max_length = 100)

class DateForm(forms.Form):
    date = forms.DateField(label="Please select a day", input_formats=['%m/%d/%Y'])


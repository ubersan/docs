---
title: macro
---

The `macro` tag allows you to create a chunk of reusable and dynamic content. The macro can be called
multiple times in the current template.

It doesn't matter where in the current template you define a macro, i.e. whether it's before or after you call it.
Here is an example of how to define a macro:
```twig
{% macro input(type="text", name, value) %}
	<input type="{{ type }}" name="{{ name }}" value="{{ value }}" />
{% endmacro %}
```
And now the macro can be called numerous times throughout the template, like so:
```twig
{{ input(name="country") }}
{# will output: <input type="text" name="country" value="" /> #}
```

A macro does not have access to the same variables that the rest of the template has access to.
A macro can only work with the variables provided as arguments.

### Access to the global context
You can pass the whole context as an argument by using the special `_context` variable if you need to access
variables outside of the macro scope:
```twig
{% set foo = 'bar' %}

{{ test(_context) }}
{% macro test(_context) %}
	{{ _context.foo }}
{% endmacro %}

{# will output: bar #}
```

(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{864:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"publish-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-a-plugin"}},[t._v("#")]),t._v(" Publish a plugin")]),t._v(" "),a("h2",{attrs:{id:"with-github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-github-actions"}},[t._v("#")]),t._v(" With GitHub Actions")]),t._v(" "),a("p",[t._v("The template include a "),a("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),a("OutboundLink")],1),t._v(" workflow in order to test."),a("br"),t._v("\nFeel free to add any step to start containers for integration, deploy to artifactory, ...")]),t._v(" "),a("h2",{attrs:{id:"publish-on-maven-central"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-on-maven-central"}},[t._v("#")]),t._v(" Publish on Maven Central")]),t._v(" "),a("p",[t._v("The template also include a gradle task that will publish to "),a("a",{attrs:{href:"https://central.sonatype.org/pages/producers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central"),a("OutboundLink")],1),t._v(". We will need to register to be able to publish to maven central.")]),t._v(" "),a("p",[t._v("You only need configure the "),a("code",[t._v("gradle.properties")]),t._v(" to have all required properties  :")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("sonatypeUsername=\nsonatypePassword=\nsigning.keyId=\nsigning.password=\nsigning.secretKeyRingFile=\n\n")])])]),a("p",[t._v("There is a preconfigured GitHub Actions in "),a("code",[t._v(".github/workflows/main.yml")]),t._v(" files that you customized to your need:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Publish")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish package to Sonatype\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" github.ref == 'refs/heads/master'\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ORG_GRADLE_PROJECT_sonatypeUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_USER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ORG_GRADLE_PROJECT_sonatypePassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_KEYID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_KEYID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_FILE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_FILE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n          echo "signing.keyId=${SONATYPE_GPG_KEYID}" > ~/.gradle/gradle.properties\n          echo "signing.password=${SONATYPE_GPG_PASSWORD}" >> ~/.gradle/gradle.properties\n          echo "signing.secretKeyRingFile=${HOME}/.gradle/secring.gpg" >> ~/.gradle/gradle.properties\n          echo ${SONATYPE_GPG_FILE} | base64 -d > ~/.gradle/secring.gpg\n          ./gradlew publishToSonatype')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Release package to Maven Central\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" startsWith(github.ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'refs/tags/v')\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ORG_GRADLE_PROJECT_sonatypeUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_USER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ORG_GRADLE_PROJECT_sonatypePassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_KEYID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_KEYID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONATYPE_GPG_FILE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONATYPE_GPG_FILE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n          echo "signing.keyId=${SONATYPE_GPG_KEYID}" > ~/.gradle/gradle.properties\n          echo "signing.password=${SONATYPE_GPG_PASSWORD}" >> ~/.gradle/gradle.properties\n          echo "signing.secretKeyRingFile=${HOME}/.gradle/secring.gpg" >> ~/.gradle/gradle.properties\n          echo ${SONATYPE_GPG_FILE} | base64 -d > ~/.gradle/secring.gpg\n          ./gradlew publishToSonatype closeAndReleaseSonatypeStagingRepository')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
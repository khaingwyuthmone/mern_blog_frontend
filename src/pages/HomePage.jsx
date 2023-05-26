import React from 'react'

const HomePage = () => {
  return (
    <>
        <h1>This is Home Page</h1>

        <p>
        A lot of people prefer, for good reasons, to manage their infrastructure as code (IaC). Some infrastructures might require an App Registration in an Azure AD. So, why would we not apply the IaC practice here as well?

        An Azure pipeline might stop you, stating Insufficient privileges to complete the operation. So, this is not possible, or is it?

        In this article I will show you how to make an Azure pipeline in charge of apps in your Azure AD.

        CONFIGURING AN AZURE PIPELINE
        Before we configure the pipeline a connection to the Azure subscription needs to be in place.

        CONNECTING TO THE SUBSCRIPTION
        If there currently is no connection between the Azure DevOps environment and the Azure subscription, it is very straight forward to create one. There are several ways to do this. The details can be found on the Connect to Microsoft Azure page of the Azure pipelines documentation site.
        </p>
    </>
  )
}

export default HomePage
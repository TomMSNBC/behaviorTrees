YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Action",
        "BaseNode",
        "BehaviorTree",
        "Blackboard",
        "Class",
        "Composite",
        "Condition",
        "Decorator",
        "Error",
        "Failer",
        "Inverter",
        "Limiter",
        "MaxTime",
        "MemPriority",
        "Priority",
        "RepeatUntilFailure",
        "RepeatUntilSuccess",
        "Repeater",
        "Runner",
        "Sequence",
        "Succeeder",
        "Tick",
        "Wait",
        "constants",
        "createUUID"
    ],
    "modules": [
        "b3",
        "constants",
        "functions"
    ],
    "allModules": [
        {
            "displayName": "b3",
            "name": "b3",
            "description": "Behavior3JS\n===========\n\n* * *\n\n**Behavior3JS** is a Behavior Tree library written in JavaScript. It \nprovides structures and algorithms that assist you in the task of creating \nintelligent agents for your game or application. Check it out some features \nof Behavior3JS:\n\n- Based on the work of (Marzinotto et al., 2014), in which they propose a \n  **formal**, **consistent** and **general** definition of Behavior Trees;\n- **Optimized to control multiple agents**: you can use a single behavior \n  tree instance to handle hundreds of agents;\n- It was **designed to load and save trees in a JSON format**, in order to \n  use, edit and test it in multiple environments, tools and languages;\n- A **cool visual editor** which you can access online;\n- Several **composite, decorator and action nodes** available within the \n  library. You still can define your own nodes, including composites and \n  decorators;\n- **Completely free**, the core module and the visual editor are all \n  published under the MIT License, which means that you can use them for \n  your open source and commercial projects;\n- **Lightweight**!\n\nVisit http://behavior3.com to know more!\n\n\n## Core Classes and Functions\n\nThis library include the following core structures...\n\n\n**Public:**\n\n- **BehaviorTree**: the structure that represents a Behavior Tree;\n- **Blackboard**: represents a \"memory\" in an agent and is required to to \n  run a `BehaviorTree`;\n- **Composite**: base class for all composite nodes;\n- **Decorator**: base class for all decorator nodes;\n- **Action**: base class for all action nodes;\n- **Condition**: base class for all condition nodes;\n\n\n**Internal:**\n\n- **Tick**: used as container and tracking object through the tree during \n  the tick signal;\n- **BaseNode**: the base class that provide all common node features;\n\n*Some classes are used internally on Behavior3JS, but you may need to access\nits functionalities eventually, specially the `Tick` object.*\n\n\n**Nodes:**\n\n- **Composite Nodes**: Sequence, Priority, MemSequence, MemPriority.\n- **Decorators**: Inverter, Limiter, MaxTime, Repeater, \n  RepeaterUntilFailure, RepeaterUntilSuccess.\n- **Actions**: Succeeder, Failer, Error, Runner, Wait."
        },
        {
            "displayName": "constants",
            "name": "constants",
            "description": "The list of all constants in B3.\n\n## Core\n\nNAME                | VALUE      \n------------------- | ----------------------\nVERSION             | depends on the version\n                    |\n**Node State**      |\nSUCCESS             | 1          \nFAILURE             | 2          \nRUNNING             | 3          \nERROR               | 4          \n                    |\n**Node categories** |\nCOMPOSITE           | 'composite'\nDECORATOR           | 'decorator'\nACTION              | 'action'   \nCONDITION           | 'condition'"
        },
        {
            "displayName": "functions",
            "name": "functions",
            "description": "List of internal and helper functions in Behavior3JS."
        }
    ]
} };
});
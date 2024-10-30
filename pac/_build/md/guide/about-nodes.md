# About Nodes

A **node** (sometimes called as a *bone*) is specific coordinate in the model that are connected to other nodes. All nodes' top parent is a *root* node, except the root node itself, which has no parent.

Nodes can be found in various objects, like in pons, heroes, bosses, minibosses and even in gimmicks. Every object has at least one node and each node has name.

The nodes' IDs and names are stored in `*.gxx` file.

Like the rigs, the nodes are used for animation, however, **in PAC instruction context, node provides position to attach object**.

## Adding object to a node

### Existing object

An existing object can be added in a node, or a new effect or gimmick can be created and attached.

[setLink](../setlink.md) is common method to connect the existing object, and [setLinkById](../setlinkbyid.md) also can be used if the node ID is known.

Then, use [setLinkParam](../setlinkparam.md) to adjust the detail data of the information of the link.

### New object

For example, when a gimmick is occupied in head-on VS, [addLinkObject](../addlinkobject.md) is called to add the turrets.

For effect, [callActorEffect](../callactoreffect.md) is used to add the effect.



More instructions are available in [here](./category.md#node).
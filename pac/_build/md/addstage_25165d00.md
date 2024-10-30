# addStage (25165d00)

> *Other functions have the same name. Check the [Disambiguation page](./addStage.md) to find them.*

Defines the stage. This requires [readArcFile](./readarcfile.md) and [setStageParam](./setstageparam.md) being called before.

More information in [How To: Setup Stages](./guide/how-to-setup-stages.md).

## Code Information

- **Name**: `addStage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5d 00`
- **Assembly Address in Memory** : `0x891fdfc`

## Parameters

> [!WARNING]
> Not all layers can be controlled with this.

- `(int)background_index` *(8 bytes)* :  Decides what to render in the place of the misc layer.
- `(int)back_object_index` *(8 bytes)* : Decides what to render in the place of back of the back object layer.
- `(int)middle_object_index` *(8 bytes)*: Decides what to render in the place of the middle object layer.
- `(int)top_object_index` *(8 bytes)*: Decides what to render in the place of e.g. grass layer of the stage (topmost layer).
- `(int)other_top_object_index` *(8 bytes)*: Decides what to render in the place of other topmost layer, *not used in most casees*.
- `(String)stage_name` : [Name of the stage](./guide/reference-table.md#stage-ids).

**If doubt, set all index to zero**.

Each scene might or might not contain the *layer*. The index is index in the *each different layer*.

**If the object index does not exist, it does not render anything in that layer**.

In many cases, a stage contain 0~1 image per layer, but sometimes it has multiple layers (e.g. in middle of the layer might contain structure images in index 1).

For more information, check [Understanding the Stage Layers](./guide/how-to-setup-stages.md#understanding-the-stage-layers).

## Remarks

The *skip" booleans also affect to the resource loading.

**The maximum stage that can be loaded in one mission is 21**. Otherwise mission won't be loaded.

## Example

Here is one example in hex:

```25 16 5d 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 73 74 67 30 / 34 34 00 00```

Which is interpreted as:

```c
addStage((int)0, (int)0, (int)0, (int)0, (int)0, "stg044")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891fdfc(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined *puVar7;
  undefined *puVar8;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar7 = &DAT_00000100;
  puVar8 = local_100;
  puVar1 = puVar8;
  while (puVar1 != (undefined *)0x0) {
    *puVar8 = 0;
    puVar8 = puVar8 + 1;
    puVar7 = puVar7 + -1;
    puVar1 = puVar7;
  }
  Pac_Get_StringParam(param_2,local_100);
  FUN_088b0404(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118),local_100,*puVar2,*puVar3,*puVar4,
               *puVar5,*puVar6);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```


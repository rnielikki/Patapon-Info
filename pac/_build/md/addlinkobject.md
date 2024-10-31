# addLinkObject

Connects a new gimmick to an existing object. The [resource](./readarcfile.md) of the new object must be [preloaded](./requestactor.md).

## Code Information

- **Name**: `addLinkObject`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 1c 00`
- **Assembly Address in Memory** : `0x8912a00`

## Parameters

no pos data?

- `(int *)handle_id` *(8 bytes)* : Variable to *store* the attached object handle.
- `(int)gimmickparam_id` *(8 bytes)* : The `gimmickparam` id of the new gimmick to create.
- `(int *)parent_handle` *(8 bytes)* : The parent handle.
- `(int)unique_id` *(8 bytes)* : Unique ID of the new gimmick to give.
- `(String)node` : The parent handle node name to attach the object.

## Example

Here is one example in hex:

```25 17 1c 00 / 04 00 00 00 / 0a 00 00 00 / 02 00 00 00 / 44 02 00 00 / 04 00 00 00 / 0f 00 00 00 / 02 00 00 00 / 15 00 00 00 / 61 74 74 61 / 63 68 00 00```

Which is interpreted as:

```c
addLinkObject((int *)iVar10, (int)580, (int *)iVar15, (int)21, "attach")
```

This is how to apply the VS turret when the fortress is occupied:

```c
0005B56C  25170600:setActive(8:8B, 2:1)
0005B580  25171C00:addLinkObject(8:7F, 2:244, 8:8B, 2:8, "attach")
0005B5AC  25173600:setModelColor(8:7F, 0.0, 2:67, 2:84, 2:FF, 2:FF)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912a00(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined *puVar6;
  int iVar7;
  undefined4 uVar8;
  undefined *puVar9;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar6 = &DAT_00000100;
  puVar9 = local_100;
  puVar1 = puVar9;
  while (puVar1 != (undefined *)0x0) {
    *puVar9 = 0;
    puVar9 = puVar9 + 1;
    puVar6 = puVar6 + -1;
    puVar1 = puVar6;
  }
  Pac_Get_StringParam(param_2,local_100);
  *puVar2 = 0xffffffff;
  iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar4,1);
  if (iVar7 == 0) {
    iVar7 = 0;
  }
  if (iVar7 != 0) {
    uVar8 = (**(code **)(*(int *)(iVar7 + 4) + 0xac))(iVar7,*puVar3,local_100,*puVar5);
    *puVar2 = uVar8;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```


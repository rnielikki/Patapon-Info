# setActionController

Sets an action (e.g. cannon attack) to a gimmick.

## Code Information

- **Name**: `setActionController`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 02 00`
- **Assembly Address in Memory** : `0x8940f00`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Gimmick handle, other kinds of handle won't work.
- `(int)type` *(8 bytes)* : Control Type, expected 0~4.
- `(float)time` *(8 bytes)* : Delay time (cooltime) between actions, as seconds.
- `(float)Var3` *(8 bytes)* : Can keep zero. Works only when `type` is 3 or 4.
- `(float)Var4` *(8 bytes)* : Can keep zero. Works only when `type` is 3 or 4.
- `(Undefined)Var5` *(8 bytes)* : Unused, can keep zero.
- `(Undefined)Var6` *(8 bytes)* : Unused, can keep zero.
- `(Undefined)Var7` *(8 bytes)* : Unused, can keep zero.

To properly use this, do not use 'In sync' (thus avoid 4).

|`type`|In sync|
|---|---|
|0x0|No|
|0x1|No|
|0x2|No|
|0x3|No|
|0x4|Yes (Does not work well)|

## Example

Here is one example in hex:

```25 19 02 00 / 04 00 00 00 / 0a 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 a0 40 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setActionController((int *)iVar10, (int)1, (float)5, (float)0, (float)0, (float)0, (float)0, (float)0)
```

This activates turret control:

```c
0005B56C  25170600:setActive(8:8B, 2:1)
0005B580  25171C00:addLinkObject(8:7F, 2:244, 8:8B, 2:8, "attach")
0005B5AC  25173600:setModelColor(8:7F, 0.0, 2:67, 2:84, 2:FF, 2:FF)
0005B5E0  25190200:setActionController(8:7F, 2:1, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08940f00(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  Pac_Get_Param(param_2,5,1,4);
  Pac_Get_Param(param_2,6,1,4);
  Pac_Get_Param(param_2,7,1,4);
  iVar6 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar6 != 0) && (iVar7 = (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6), iVar7 == 10)) {
    iVar7 = *piVar2;
    if (iVar7 == 4) {
      FUN_0894db68(*puVar3,*puVar4,*puVar5,*(int *)(*(int *)(param_1 + 0x10) + 0x108) + 0x16a4,iVar6
                   ,1);
    }
    else if (iVar7 == 3) {
      FUN_0894db68(*puVar3,*puVar4,*puVar5,*(int *)(*(int *)(param_1 + 0x10) + 0x108) + 0x16a4,iVar6
                   ,0);
    }
    else if (iVar7 == 2) {
      FUN_0894db68(*puVar3,0,0,*(int *)(*(int *)(param_1 + 0x10) + 0x108) + 0x16a4,iVar6,0);
    }
    else if (iVar7 == 1) {
      FUN_0894db68(*puVar3,0,0,*(int *)(*(int *)(param_1 + 0x10) + 0x108) + 0x16a4,iVar6,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```


# setStageParam

Sets background move sensitivity with the camera move.

## Code Information

- **Name**: `setStageParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5e 00`
- **Assembly Address in Memory** : `0x891ff20`

## Parameters

> [!WARNING]
> Not all layers are controllable. There is one layer that has fixed camera sensitivity.

- `(float)sky_sensitivity` *(8 bytes)*: Sky move sensitivity for field.
- `(float)backobject_sensitivity` *(8 bytes)*: background object move sensitivity.
- `(float)middleobject_sensitivity` *(8 bytes)*: 2nd frontmost background (e.g. stone/tree in bg) move sensitivity.
- `(bool)skip_specific_bg` *(8 bytes)* : Skip some types of background, keep 0 to render all.
- `(String)stage_name`: Name of stage to set the values.

## Remarks

They are predefined in each mission's PAC instructions like this.

**Use the existing one** with [cmd_call](./cmd_call.md) for smooth experience.

For more information, check [the related article](./guide/how-to-setup-stages.md#third-set-the-stageparam).

```c
00006D14  25165E00:setStageParam(0.800000011920929, 0.6000000238418579, 0.4000000059604645, 2:0, "stg001")
00006D40  25000100:cmd_end()
00006D44  25165E00:setStageParam(0.8999999761581421, 0.6000000238418579, 0.4000000059604645, 2:0, "stg008")
00006D70  25000100:cmd_end()
00006D74  25165E00:setStageParam(1.0, 0.800000011920929, 0.6000000238418579, 2:0, "stg038")
00006DA0  25000100:cmd_end()
...
```

## Example

Here is one example in hex:

```25 16 5e 00 / 10 00 00 00 / cd cc 4c 3f / 10 00 00 00 / 9a 99 19 3f / 10 00 00 00 / cd cc cc 3e / 02 00 00 00 / 00 00 00 00 / 73 74 67 30 / 30 31 00 00```

Which is interpreted as:

```c
setStageParam((float)0.8, (float)0.6, (float)0.4, (int)0, "stg001")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ff20(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined *puVar5;
  int iVar6;
  undefined *puVar7;
  undefined4 local_184;
  undefined auStack384 [32];
  undefined4 local_160;
  undefined local_15c;
  undefined4 local_158 [4];
  undefined4 local_148;
  undefined4 local_144;
  undefined local_100 [4];
  undefined auStack252 [252];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  Pac_Get_Param(param_2,3,1,4);
  puVar5 = &DAT_00000100;
  puVar7 = local_100;
  puVar1 = puVar7;
  while (puVar1 != (undefined *)0x0) {
    *puVar7 = 0;
    puVar7 = puVar7 + 1;
    puVar5 = puVar5 + -1;
    puVar1 = puVar5;
  }
  Pac_Get_StringParam(param_2,local_100);
  local_160 = 0;
  local_184 = 0;
  local_15c = 0;
  Syscall::Kernel::Kernel_Memset(local_158,0,0x58);
  local_158[0] = 0x3e99999a;
  local_148 = 0x3e4ccccd;
  local_144 = 0x3dcccccd;
  Syscall::strcpy(auStack384,local_100);
  local_158[0] = *puVar2;
  local_148 = *puVar3;
  local_144 = *puVar4;
  iVar6 = Message::Char::Magicword_Number_Parser(auStack252);
  local_15c = iVar6 < 0x24;
  FUN_088b0514(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118),&local_184);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```


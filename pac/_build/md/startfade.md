# startFade

Provides fade-in or fade-out effect. For smooth scene change, use with [getFadeRate](./getfaderate.md).

## Code Information

- **Name**: `startFade`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 86 00`
- **Assembly Address in Memory** : `0x8921688`

## Parameters

- `(int)z_priority` *(8 bytes)* : z-index (render priority), higher goes more top.
- `(float)fade_time` *(8 bytes)* : Fade time as seconds.
- `(float)red` *(8 bytes)* : Red colour of the fade screen, in range of 0~1.
- `(float)green` *(8 bytes)* : Green colour of the fade screen, in range of 0~1.
- `(float)blue` *(8 bytes)* : Blue colour of the fade screen, in range of 0~1.
- `(float)alpha` *(8 bytes)* : Alpha of the fade screen, 1 for fade-out and 0 for fade-in.

## Remarks

**Note this fades from current fade screen**.

For example, for pure fade-in effect, `alpha` 1 with `fade_time` 0 must be defined first:

```c
startFade((int)900012, (float)0, (float)0, (float)0, (float)0, (float)1) //fade in preheat
startFade((int)900012, (float)0.3, (float)0, (float)0, (float)0, (float)0) //fade in
```

## Example

Here is one example in hex:

```25 16 86 00 / 02 00 00 00 / ac bb 0d 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
startFade((int)900012, (float)0, (float)0, (float)0, (float)0, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921688(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar8 = *(int *)(*(int *)(param_1 + 0x10) + 200), iVar8 != 0)) {
    iVar9 = *piVar1;
    iVar7 = (**(code **)(*(int *)(iVar8 + 0x1c) + 0x10))(iVar8);
    if (iVar9 == iVar7) {
      local_4 = *puVar6;
    }
    else {
      (**(code **)(*(int *)(iVar8 + 0x1c) + 0x14))(iVar8,iVar9);
      local_4 = *puVar6;
    }
    local_8 = *puVar5;
    local_c = *puVar4;
    local_10 = *puVar3;
    FUN_089926b0(*puVar2,iVar8,&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```


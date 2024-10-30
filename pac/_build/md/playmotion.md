# playMotion

Plays certain motion of a given character or any object. Please describe difference from [pushMotion](./pushmotion.md).

## Code Information

- **Name**: `playMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 37 00`
- **Assembly Address in Memory** : `0x89146e0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int)action_id` *(8 bytes)* : The [Action ID](./guide/reference-table.md#action-ids) to perform.
- `(bool)loop` *(8 bytes)* : If it is 0, animation is played once and character is paused. Otherwise the animation loops.
- `(float)offset` *(8 bytes)* : Start offset of the animation. (*Maybe* 1.0 represents around 0.2sec)
   - Usual hero animation offset length seems like around 6~10. Please tell more about this parameter.
- `(float)delay` *(8 bytes)* : Delay before starting the animation. This can be -1.

## Example

Here is one example in hex:

```25 17 37 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
playMotion((int *)iVar0, (int)1, (int)1, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089146e0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined2 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  float *pfVar5;
  int iVar6;
  int iVar7;
  float fVar8;
  float fVar9;
  undefined local_c;
  char local_b;
  undefined local_a;
  undefined local_9;
  undefined4 local_8;
  uint local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined2 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  pfVar5 = (float *)Pac_Get_Param(param_2,4,1,4);
  if (*piVar1 != -1) {
    iVar6 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
                    // skipping this = executes id 0 animation
    if (((iVar6 != 0) && (iVar6 = *(int *)(iVar6 + 200), iVar6 != 0)) &&
       (iVar7 = *(int *)(iVar6 + 0x1e8), iVar7 != 0)) {
      *(undefined *)(iVar6 + 0xb9) = 0;
      *(undefined *)(iVar7 + 0xb9) = 1;
      local_8 = *puVar4;
      fVar9 = *pfVar5;
      local_b = -(*piVar3 != 0);
      fVar8 = fVar9 * 4800.0;
      local_c = (undefined)*puVar2;
                    // decides anim
      if (fVar8 < 2.147484e+09) {
        local_4 = (uint)fVar8;
      }
      else {
        local_4 = (int)(fVar8 - 2.147484e+09) | 0xffff8000;
      }
      local_a = fVar9 < 0.0;
      local_9 = 1;
      if (fVar9 < 0.0) {
        local_4 = 0;
      }
      FUN_08980f68(iVar7,&local_c);
      if (*pfVar5 == 0.0) {
        FUN_08980b24(iVar7,iVar6,0);
        (**(code **)(*(int *)(iVar6 + 0x7c) + 0xc))(iVar6,0);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

